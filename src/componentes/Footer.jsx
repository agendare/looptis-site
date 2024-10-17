import React from "react";

export default function Footer() {
   return (
      <div
         style={{
            backgroundColor: "black",
            color: "white",
            padding: "20px 0",
            textAlign: "center",
            marginTop: "50px",
            height: "100%",
            width: "100%",
            justifyContent: "center",
         }}
      >
         <div style={{ marginBottom: "20px", marginTop: "30px" }}>
            <h4 style={{ margin: 0 }}>Siga-nos nas redes sociais</h4>
         </div>
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               gap: "20px",
               marginBottom: "20px",
            }}
         >
            <a
               href="https://www.facebook.com"
               style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "22px",
               }}
               target="_blank"
               rel="noopener noreferrer"
            >
               Facebook
            </a>
            <a
               href="https://www.instagram.com"
               style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "22px",
               }}
               target="_blank"
               rel="noopener noreferrer"
            >
               Instagram
            </a>
            <a
               href="https://www.twitter.com"
               style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "22px",
               }}
               target="_blank"
               rel="noopener noreferrer"
            >
               Twitter
            </a>
            <a
               href="https://www.linkedin.com"
               style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "22px",
               }}
               target="_blank"
               rel="noopener noreferrer"
            >
               LinkedIn
            </a>
         </div>
         <div style={{ marginTop: "40px" }}>
            <p style={{ margin: 0, fontSize: "30px" }}>
               © 2024 Looptis. Todos os direitos reservados.
            </p>
         </div>
      </div>
   );
}
