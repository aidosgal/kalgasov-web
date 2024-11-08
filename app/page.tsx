"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { HiOutlineHeart, HiOutlineChatAlt2 } from "react-icons/hi";
import { HiOutlineX, HiOutlinePhotograph } from "react-icons/hi";
import { HiStar } from "react-icons/hi2";
import { BiShare } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";
import PostCard from "@/components/PostCard";

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
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
  background_url: string | null;
  last_name: string;
  city: string | null;
  date_of_birth: string | null;
  show_date_of_birth: number;
  subsribed_until: string | null;
}

interface Image {
  id: number;
  post_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

interface CommentResponse {
  id: number;
  user_id: number;
  post_id: number;
  comment_id: number | null;
  comment: string;
  created_at: string;
  updated_at: string;
  user: User;
}

interface Comment {
  id: number;
  user_id: number;
  post_id: number;
  comment_id: number | null;
  comment: string;
  created_at: string;
  updated_at: string;
  responses: CommentResponse[];
  user: User;
}

interface Post {
  id: number;
  user_id: number;
  description: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  images: Image[];
  user: User;
  comments: Comment[];
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchPostsData = async () => {
      // Retrieve userData from localStorage
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setUserData(parsedData);
        } catch (error) {
          console.error("Error parsing userData from localStorage", error);
        }
      }

      // Fetch posts data from API
      try {
        const response = await fetch("https://sheber.shop/api/post");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log the full response data

        // Assuming the posts are inside a `posts` property in the response data
        if (data && data.posts) {
          setPosts(data.posts);
          console.log("Fetched posts:", JSON.stringify(data.posts, null, 2)); // Log posts in readable format
        } else {
          console.error("No posts found in the response");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPostsData();
  }, []);

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
    <div className="grid grid-cols-10 gap-x-3">
      <div className="col-span-7">
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
        {posts.length > 0 ? (
          <div>
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <div>Нет записей</div>
        )}
        <div className="grid grid-cols-3 gap-x-3 mt-3">
          <div className="bg-white p-3 border border-gray-200 rounded-lg">
            <div className="relative">
              <div className="absolute top-0 right-0">
                <HiOutlineHeart className="text-2xl text-gray-400" />
              </div>
              <img
                src="/product.jpg"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
            <div className="text-gray-700 text-sm mt-2">Coca-Cola 0.35л</div>
            <div className="mt-2 flex gap-x-2 items-center">
              <HiStar className="text-xl text-yellow-500" />
              <div className="text-sm font-semibold">4.85</div>
              <div className="text-sm text-gray-500">(16 отзывов)</div>
            </div>
            <div className="font-semibold mt-2 text-lg">4 000₽</div>
            <div className="text-center bg-blue-500 mt-2 text-white rounded-lg py-2 text-sm font-semibold">
              Написать
            </div>
          </div>
          <div className="bg-white p-3 border border-gray-200 rounded-lg">
            <div className="relative">
              <div className="absolute top-0 right-0">
                <HiOutlineHeart className="text-2xl text-gray-400" />
              </div>
              <img
                src="/product.jpg"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
            <div className="text-gray-700 text-sm mt-2">Coca-Cola 0.35л</div>
            <div className="mt-2 flex gap-x-2 items-center">
              <HiStar className="text-xl text-yellow-500" />
              <div className="text-sm font-semibold">4.85</div>
              <div className="text-sm text-gray-500">(16 отзывов)</div>
            </div>
            <div className="font-semibold mt-2 text-lg">4 000₽</div>
            <div className="text-center bg-blue-500 mt-2 text-white rounded-lg py-2 text-sm font-semibold">
              Написать
            </div>
          </div>
          <div className="bg-white p-3 border border-gray-200 rounded-lg">
            <div className="relative">
              <div className="absolute top-0 right-0">
                <HiOutlineHeart className="text-2xl text-gray-400" />
              </div>
              <img
                src="/product.jpg"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
            <div className="text-gray-700 text-sm mt-2">Coca-Cola 0.35л</div>
            <div className="mt-2 flex gap-x-2 items-center">
              <HiStar className="text-xl text-yellow-500" />
              <div className="text-sm font-semibold">4.85</div>
              <div className="text-sm text-gray-500">(16 отзывов)</div>
            </div>
            <div className="font-semibold mt-2 text-lg">4 000₽</div>
            <div className="text-center bg-blue-500 mt-2 text-white rounded-lg py-2 text-sm font-semibold">
              Написать
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="bg-white border border-gray-200 rounded-lg p-5"></div>
      </div>
    </div>
  );
}
