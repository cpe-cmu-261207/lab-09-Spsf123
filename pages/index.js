import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <section class="home" id="home">
          <div class="home-text">
            <h1>SURAPA LUANGPIWDET</h1>
            <h2>
              Hi, my name is Surapa. I am currently enrolled in the Faculty of
              Engineering Computer Engineering Branch
              <br />
              at Chiang Mai University.
            </h2>
          </div>
          <div class="me">
            <img
              src="/image/profile.jpg"
              width="900rem"
              height="900rem"
              style={{ objectfit: "cover" }}
              class="rounded-circle p-5"
            />
          </div>
        </section>
      </div>

      <p class="skill">My hobby</p>
      <div class="d-flex gap-3 mt-4 justify-content-center">
        <div class="card" style={{ width: "18rem" }}>
          <img src="image/mo.jpg" class="card-img-top m-auto" />
          <div class="card-body m-2">
            <span class="badge rounded-pill text-bg-primary">Movies</span>
            <p class="card-text">
              I enjoy watching Korean movies and tv shows.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="image/mu.jpg" class="card-img-top m-auto" />
          <div class="card-body m-2">
            <span class="badge rounded-pill text-bg-primary">Music</span>
            <p class="card-text">
              In my spare time, I am always listening to music. because it makes
              me relax and happy.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="image/travel.png" class="card-img-top m-auto" />
          <div class="card-body m-2">
            <span class="badge rounded-pill text-bg-primary">Travel</span>
            <p class="card-text">
              Every long weekend, I make time to travel. to highlight yourself
              to new experiences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <br />
    </div>
  );
}
