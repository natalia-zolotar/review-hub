"use client"
import { ReviewsContext, useReviewsContext } from "@/app/context/reviews.context"

export default function ReviewsProvider({ children }) {
  const reviews = useReviewsContext()

  return (
    <ReviewsContext.Provider value={reviews}>
      {children}
    </ReviewsContext.Provider>
  )
}