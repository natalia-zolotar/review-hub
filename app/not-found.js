import Link from "next/link"
import "@/app/styles/not-found.scss"

export default function NotFound() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  )
}