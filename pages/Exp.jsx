import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <p class="expre">Project Experience</p>

      <div class="bottom2">
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="image/scratch.png" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Scratch</h5>
                <p class="card-text">
                  have participated to the game's development by playing the
                  game and helping to determine its aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="image/C_logo-2.png" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Programing</h5>
                <p class="card-text">
                  I participated in programming during the first year finals.
                  physics formula calculation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
