import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <p class="expre">Contact</p>
        <div class="contact d-flex justify-content-center">
          <img
            src="image/profile.jpg"
            width="150"
            height="150"
            class="rounded-circle me-5"
            style={{ objectFit: "cover", boxShadow: "3px,3px,20px,black" }}
          />
          <div>
            <span>
              Name <br />
            </span>
            <span>
              Nickname <br />
            </span>
            <span>
              Address <br />
            </span>
            <span>
              Facebook <br />
            </span>
            <span>
              Email <br />
            </span>
            <span>Phone</span>
          </div>
          <div>
            <span class="para1">Surapa Luangpiwdet</span> <br />
            <span class="para1">Saifah</span> <br />
            <span class="para1">
              499/81 siriporn contryvill sansainoi sansai chiangmai
            </span>
            <br />
            <span>
              <a
                href="https://www.facebook.com/sayfah158/"
                class="text-decoration-none para1"
                target="_blank"
                rel="noreferrer"
              >
                Surapa Luangpiwdet
              </a>
              <br />
            </span>
            <a
              href="mailto:Surapa_Luangpiwdet@cmu.ac.th"
              class="text-decoration-none para1"
            >
              Surapa_Luangpiwdet@cmu.ac.th
            </a>
            <br />
            <span class="para1">082-942-6828</span> <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
