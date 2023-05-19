import { Link } from "react-router-dom";

export default function SewaMobil() {
  return (
    <section id="sewamobil">
      <div className="container-fluid car-container text-white text-center">
        <div
          className="py-5"
          style={{ background: "#0D28A6", borderRadius: "16px" }}
        >
          <h1 className="fw-bold car-title">Sewa Mobil di (Jawa Timur) Sekarang</h1>
          <p className="mx-auto mt-4" style={{ fontSize: "15px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/cars" className="btn btn-primary btn-lg car-button">
              Mulai Sewa Mobil
            </Link>
        </div>
      </div>
    </section>
  );
}
