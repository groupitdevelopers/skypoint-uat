import * as React from "react"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <>
      <section className="fourzerofour">
        <div className="container">
          <div className="row">
            <div className="txt-white p-3 hero-text">
              <h1>Looks like you're lost in the clouds</h1>
              <h3>We couldn't find the page you were looking for.</h3>
              <div className="buttons">
                <a href="/" className="btn btn-lg btn-primary">Head Back Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
