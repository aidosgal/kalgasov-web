"use client";
import { HiOutlineX, HiOutlinePhotograph } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";
import PostCard from "@/components/PostCard";

interface UserPageProps {
  params: {
    user_id: string;
  };
}

interface UserData {
  id: string;
  name: string;
  last_name: string;
  email: string;
  avatar?: string;
}

interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  avatar?: string;
  posts: {
    id: number;
    user_id: number;
    description: string;
    created_at: string;
    updated_at: string;
    images: {
      id: number;
      post_id: number;
      image_url: string;
      created_at: string;
      updated_at: string;
    }[];
    comments: {
      id: number;
      post_id: number;
      user_id: number;
      content: string;
      created_at: string;
      updated_at: string;
      responses: {
        id: number;
        comment_id: number;
        user_id: number;
        content: string;
        created_at: string;
        updated_at: string;
      }[];
    }[];
  }[];
}

const UserPage: React.FC<UserPageProps> = ({ params }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const resolvedParams = await params;
      setUserId(resolvedParams.user_id);
    };

    fetchUserData();
  }, [params]);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
        const response = await fetch(`https://sheber.shop/api/user/${userId}`);
        const data = await response.json();
        setUser(data.user);
      };
      fetchUserData();
    }
  }, [userId]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setSelectedImages((prev) => [...prev, ...files]);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrls((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("user_id", userData?.id || "1");
      formData.append("description", description);
      selectedImages.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      const response = await fetch("https://sheber.shop/api/post", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setDescription("");
        setSelectedImages([]);
        setPreviewUrls([]);
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      alert(error);
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {user && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="bg-gray-100 w-full h-[200px] rounded-lg"></div>
          <div className="flex bg-white py-5 px-10">
            {user.avatar ? (
              <img
                src={`${user.avatar}`}
                className="w-[140px] h-[140px] rounded-full object-cover -mt-20"
              />
            ) : (
              <img
                src="/default.png"
                className="w-[140px] h-[140px] rounded-full object-cover -mt-20"
              />
            )}
            <div className="ml-5">
              <div className="text-2xl font-semibold">
                {user.name} {user.last_name}
              </div>
              <div className="text-sm text-blue-500 mt-2">
                Укажите информацию о себе
              </div>
            </div>
            <div className="ml-auto">
              <div className="px-6 py-2 text-sm bg-black text-white font-semibold rounded-lg">
                Редактировать профиль
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-10 gap-x-3 mt-3">
        <div className="col-span-6">
          {userData?.id == userId && (
            <div className="bg-white rounded-lg border border-gray-200 p-5 mb-3">
              <form onSubmit={handleSubmit}>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Что у вас нового?"
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                {previewUrls.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
                        >
                          <HiOutlineX className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between mt-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <HiOutlinePhotograph className="w-5 h-5" />
                    <span className="text-sm">Добавить фото</span>
                  </button>
                  <button
                    type="submit"
                    disabled={
                      isLoading || (!description && selectedImages.length === 0)
                    }
                    className={`px-6 py-2 bg-black text-white text-sm rounded-lg font-semibold ${
                      isLoading || (!description && selectedImages.length === 0)
                        ? "opacity-20 cursor-not-allowed"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    {isLoading ? "Публикация..." : "Опубликовать"}
                  </button>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  accept="image/*"
                  multiple
                  className="hidden"
                />
              </form>
            </div>
          )}
          {user?.posts.length > 0 ? (
            <div>
              {user.posts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="col-span-4">
          <div className="p-5 bg-white rounded-lg border border-gray-200">
            <div className="font-semibold">Магазины</div>
            <div className="mt-5">
              <div className="text-center text-gray-500">
                У вас нет магазинов
              </div>
              <div className="flex">
                <div className="font-semibold mx-auto mt-2 text-center text-sm px-7 py-2 rounded-lg text-white bg-black inline-block">
                  Создать
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 mt-2 bg-white rounded-lg border border-gray-200">
            <div className="font-semibold">Подписки</div>
            <div className="mt-5">
              <div className="text-center text-gray-500">
                У вас нет подписок
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
