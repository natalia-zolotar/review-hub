import "@/app/styles/header.scss"

export default function Header() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <strong className="hero__heading">Your opinion matters!</strong>
          <h1>Share your experience about <mark> Your Cute Dolls </mark> and help other buyers!</h1>

          <ul className="hero__features">
            <li>
              ✽ Real reviews from real customers
            </li>
            <li>
              ✽ Honest opinions with no fake ratings
            </li>
            <li>
              ✽ Trusted feedback to help you shop confidently
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}