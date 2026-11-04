import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react"
import { addReviewToDB, getReviewsFromDB } from "@/app/api/reviews"

export const ReviewsContext = createContext()
export const useReviews = () => useContext(ReviewsContext)

export const useReviewsContext = () => {
  const [allReviews, setAllReviews] = useState([])

  useEffect(() => {
    const loadReviews = async () => {
      const response = await getReviewsFromDB()

      if (response.is) {
        setAllReviews(response.data)
      }
    }

    loadReviews()
  }, [])

  const addReview = useCallback(async(item) => {
    const response = await addReviewToDB(item)

    if (response.is) {
      setAllReviews(prev => [item, ...prev])
    } else {
      alert(`ERROR: ${response.text}`)
    }
  }, [])

  return useMemo(() => ({
    allReviews,
    addReview
  }), [allReviews, addReview])
}