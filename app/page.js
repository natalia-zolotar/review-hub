import ReviewsProvider from "./ReviewsProvider"
import Header from "@/components/header/Header"
import FeedbackList from "@/components/feedback/FeedbackList"
import LeaveReview from "@/components/leave-review/LeaveReview"
import Image from "next/image"
import "@/app/styles/page.scss"

export const metadata = {
  title: "Feedback Store — Reviews of Toy Stores and Products",
  description: "Read real customer reviews of toy stores and toys. Share your experience and help others choose the best products."
}

export default function Home() {
  return (
    <ReviewsProvider>
      <div className="page">
        <Header />

        <main className="main">
          <div className="container">
            <div className="content">

              <div className="column__left">
                <FeedbackList />
              </div>

              <aside className="column__right">

                <LeaveReview />

                <Image
                  src="/toys-delivery.webp"
                  alt="Toys delivery"
                  width={400}
                  height={604}
                  className="sidebar__image"
                  preload
                />

              </aside>
            </div>
          </div>
        </main>
      </div>
    </ReviewsProvider>
  )
}