import React, { useState, useEffect } from "react";
import { HiOutlineHeart, HiOutlineChatAlt2 } from "react-icons/hi";
import { BiShare } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";
import axios from "axios";
import { formatTimestamp } from "@/utils/formatTimestaps";

const PostCard = ({ post }) => {
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");
  const [replyingToComment, setReplyingToComment] = useState(null);
  const [comments, setComments] = useState(post.comments);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % post.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + post.images.length) % post.images.length,
    );
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post("https://sheber.shop/api/comment", {
        user_id: userData.id,
        post_id: post.id,
        comment: newComment,
      });
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleReplySubmit = async (commentId) => {
    try {
      const response = await axios.post("https://sheber.shop/api/comment", {
        user_id: userData.id,
        post_id: post.id,
        comment_id: commentId,
        comment: newReply,
      });
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            responses: [...comment.responses, response.data.comment],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setNewReply("");
      setReplyingToComment(null);
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  return (
    <div className="mt-2 w-full cursor-pointer gap-x-3 py-5 rounded-lg bg-white border border-gray-200">
      <div className="flex px-5 gap-x-3">
        <div className="flex-shrink-0">
          {post.user?.avatar_url ? (
            <img
              src={`${post?.user?.avatar_url}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <img
              src="/default.png"
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-x-2">
            <div className="font-semibold">
              {post.user?.name} {post.user?.last_name}
            </div>
            <div className="text-gray-500 text-sm">
              @{post.user.email.split("@")[0]}
            </div>
            <div className="text-gray-500 text-sm">
              {formatTimestamp(post?.created_at)}
            </div>
          </div>
          <div>
            <div>{post?.description}</div>
            {post?.images?.length > 0 && (
              <div className="mt-2">
                <div className="relative">
                  <img
                    src={`https://sheber.shop/storage/${post.images[currentImageIndex].image_url}`}
                    alt={`Post ${post.id} Image`}
                    width={640}
                    height={360}
                    className="w-full object-contain rounded-lg"
                  />
                  {post.images.length != 1 && (
                    <div>
                      <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 pointer-events-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.3 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 pointer-events-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.7 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                {post.images.length != 1 && (
                  <div className="flex justify-center mt-2">
                    {post.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 mx-1 rounded-full ${
                          currentImageIndex === index
                            ? "bg-black"
                            : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="flex items-center mt-2 gap-x-2">
              <div className="flex items-center gap-x-1 py-1 px-4 rounded-full bg-red-100 text-red-600">
                <HiOutlineHeart className="text-xl" />
                <div className="text-sm">153</div>
              </div>
              <div className="flex items-center gap-x-1 py-1 px-4 rounded-full bg-gray-100 text-gray-600">
                <HiOutlineChatAlt2 className="text-xl" />
                <div className="text-sm">{post.comments?.length || 0}</div>
              </div>
              <div className="flex items-center gap-x-1 py-1 px-4 rounded-full bg-gray-100 text-gray-600">
                <BiShare className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {post.comments?.length > 0 && (
        <div className="border-t-[1px] px-10 border-gray-200 mt-3">
          {comments.map((comment, commentIndex) => (
            <div
              key={commentIndex}
              className={`flex gap-x-3 mt-4 ${comment.comment_id != null && "hidden"}`}
            >
              <div className="flex-shrink-0">
                {comment.user?.avatar_url ? (
                  <img
                    src={`${comment.user.avatar_url}`}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <img
                    src="/default.png"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                )}
              </div>
              <div className="text-sm">
                <div className="font-semibold">
                  {comment.user?.name} {comment.user?.last_name}
                </div>
                <div>{comment.comment}</div>
                <div className="flex gap-x-2 text-gray-500 items-center">
                  <div>{formatTimestamp(comment.created_at)}</div>
                  <div
                    className="text-red-500"
                    onClick={() => setReplyingToComment(comment)}
                  >
                    Ответить
                  </div>
                </div>
                {replyingToComment?.id === comment.id && (
                  <div className="flex w-full gap-x-3 mt-2">
                    <input
                      type="text"
                      className="border text-sm px-3 w-full rounded-lg border-gray-200"
                      placeholder="Написать ответ"
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                    />
                    <div>
                      <div
                        className="rounded-full flex text-white bg-black w-[35px] h-[35px] cursor-pointer"
                        onClick={() => handleReplySubmit(comment.id)}
                      >
                        <IoMdArrowUp className="text-xl mx-auto my-auto" />
                      </div>
                    </div>
                  </div>
                )}
                {comment?.responses?.length > 0 && (
                  <div className="mt-2">
                    {comment.responses.map((response, responseIndex) => (
                      <div key={responseIndex} className={`flex gap-x-3 mt-2`}>
                        <div className="flex-shrink-0">
                          {response.user?.avatar_url ? (
                            <img
                              src={`${response.user.avatar_url}`}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          ) : (
                            <img
                              src="/default.png"
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          )}
                        </div>
                        <div className="text-sm">
                          <div className="font-semibold">
                            {response.user.name} {response.user.last_name}
                          </div>
                          <div>{response.comment}</div>
                          <div className="flex gap-x-2 text-gray-500 items-center">
                            <div>{formatTimestamp(response.created_at)}</div>
                            <div className="text-red-500">Ответить</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-x-3 mt-4 px-10 items-center">
        <div className="flex-shrink-0">
          {userData.avatar ? (
            <img
              src={`${userData.avatar}`}
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <img
              src="/default.png"
              className="w-9 h-9 rounded-full object-cover"
            />
          )}
        </div>
        <div className="flex w-full gap-x-3">
          <input
            type="text"
            className="border text-sm px-3 w-full rounded-lg border-gray-200"
            placeholder="Написать коментарий"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div>
            <div
              className="rounded-full flex text-white bg-black w-[35px] h-[35px]"
              onClick={handleCommentSubmit}
            >
              <IoMdArrowUp className="text-xl mx-auto my-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
