import React from "react";
import softwareDevelopment from "../assets/soft.jpg";
export default function Home() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "558535145360"; // Substitua pelo número de telefone desejado
      const message =
         "Olá, gostaria de saber mais sobre as soluções de software da Looptis.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
         message
      )}`;
      window.open(url, "_blank");
   };
   return (
      <div
         style={{
            width: "100%",
            height: "100vh",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
         }}
      >
         <div style={{ marginRight: "200px" }}>
            <h1 style={{ textAlign: "left", color: "black", fontSize: "70px" }}>
               Inove com a <span style={{ color: "red" }}>Looptis</span>
            </h1>

            <p style={{ textAlign: "left", color: "black", fontWeight: 600 }}>
               Transforme suas ideias em realidade com soluções de software
               personalizadas. <br /> Descubra como a Looptis pode impulsionar o
               seu negócio com tecnologia de ponta.
            </p>
            <button
               style={{
                  backgroundColor: "#18B32D",
                  color: "white",
                  width: "200px",
                  height: "50px",
                  fontSize: "18px",
                  fontWeight: "bold",
               }}
               onClick={handleWhatsAppClick}
            >
               Entre em contato
            </button>
         </div>
         <div>
            <img
               src={softwareDevelopment}
               alt="Desenvolvimento de Software"
               style={{ width: "500px", borderRadius: "10px" }}
            />
         </div>
      </div>
   );
}
