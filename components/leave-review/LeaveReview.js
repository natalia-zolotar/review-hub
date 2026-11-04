"use client";
import { useState } from "react"
import Modal from "../modal/Modal"
import "@/app/styles/leave-review.scss"

export default function LeaveReview() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)

  return (
    <>
      <div className="leave__review">
        <button
          className="btn__review"
          onClick={() => setIsOpen(true)}
        >
          💬 <span>Leave a Review</span>
        </button>
      </div>

      {isOpen && (
        <Modal
          closeModal={closeModal}
        />
      )}
    </>
  )
}