import React from "react";
import Footer from "./Footer";
export default function Vantagens() {
   return (
      <div
         style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
         }}
      >
         <h1>Vantagens do aplicativo</h1>
         <div style={{ display: "flex", gap: "10px", marginTop: "50px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
               <div
                  style={{
                     backgroundColor: "red",
                     width: "250px",
                     padding: "20px",
                     boxSizing: "border-box",
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     wordWrap: "break-word",
                     borderRadius: "10px",
                  }}
               >
                  <h2 style={{ color: "white", fontSize: "22px" }}>
                     Desenvolvimento Ágil
                  </h2>
                  <h2 style={{ fontSize: "18px", color: "white" }}>
                     Na Looptis, utilizamos metodologias ágeis para garantir que
                     seu projeto seja entregue no prazo e com a qualidade
                     esperada. Nossa abordagem flexível permite ajustes rápidos
                     e eficientes durante o desenvolvimento.
                  </h2>
               </div>

               <div
                  style={{
                     backgroundColor: "red",
                     width: "250px",
                     padding: "20px",
                     boxSizing: "border-box",
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     wordWrap: "break-word",
                     borderRadius: "10px",
                  }}
               >
                  <h2 style={{ color: "white", fontSize: "22px" }}>
                     Tecnologia de Ponta
                  </h2>
                  <h2 style={{ fontSize: "18px", color: "white" }}>
                     Utilizamos as tecnologias mais recentes para desenvolver
                     soluções de software inovadoras e eficientes. Isso garante
                     que seu aplicativo esteja sempre atualizado e competitivo
                     no mercado.
                  </h2>
               </div>

               <div
                  style={{
                     backgroundColor: "red",
                     width: "250px",
                     padding: "20px",
                     boxSizing: "border-box",
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     wordWrap: "break-word",
                     borderRadius: "10px",
                  }}
               >
                  <h2 style={{ color: "white", fontSize: "22px" }}>
                     Suporte Contínuo
                  </h2>
                  <h2 style={{ fontSize: "18px", color: "white" }}>
                     Oferecemos suporte contínuo para garantir que seu
                     aplicativo funcione perfeitamente após o lançamento. Nossa
                     equipe está sempre disponível para resolver qualquer
                     problema e implementar melhorias.
                  </h2>
               </div>

               <div
                  style={{
                     backgroundColor: "red",
                     width: "250px",
                     padding: "20px",
                     boxSizing: "border-box",
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     wordWrap: "break-word",
                     borderRadius: "10px",
                  }}
               >
                  <h2 style={{ color: "white", fontSize: "22px" }}>
                     Personalização
                  </h2>
                  <h2 style={{ fontSize: "18px", color: "white" }}>
                     Desenvolvemos soluções personalizadas que atendem às
                     necessidades específicas do seu negócio. Cada projeto é
                     único e feito sob medida para garantir o máximo de
                     eficiência e satisfação.
                  </h2>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
