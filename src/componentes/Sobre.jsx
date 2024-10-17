import React from "react";
import "./index.css";
import logo from "../assets/logo.jpg";
function Sobre() {
   return (
      <div
         style={{ width: "100%", height: "100vh", backgroundColor: "#a80808" }}
      >
         {/* Seção superior com a imagem e o texto */}
         <div
            style={{
               display: "flex",
               padding: "50px",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <img
               src={logo}
               alt="Desenvolvimento de Software"
               style={{
                  width: "50%",
                  borderRadius: "10px",
                  height: "300px",
               }}
            />

            <div style={{ flex: 1, color: "white", padding: "20px" }}>
               <h2>Inovação em Desenvolvimento de Software</h2>
               <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                  Na <strong>Looptis</strong>, transformamos suas ideias em
                  realidade com soluções de software personalizadas. Nossa
                  equipe de especialistas utiliza as tecnologias mais recentes
                  para entregar produtos de alta qualidade que atendem às suas
                  necessidades específicas.
               </p>
               <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                  Oferecemos uma ampla gama de serviços, incluindo
                  desenvolvimento de aplicativos web e móveis, integração de
                  sistemas, consultoria em tecnologia e muito mais. Nosso
                  compromisso é com a inovação, a eficiência e a satisfação do
                  cliente.
               </p>
            </div>
         </div>

         {/* Comparação entre os serviços */}
         <div
            style={{
               display: "flex",
               justifyContent: "space-around",
               padding: "50px",
            }}
         >
            {/* Desenvolvimento Tradicional */}
            <div
               style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  width: "30%",
                  textAlign: "center",
               }}
            >
               <h3 style={{ color: "#a80808" }}>DESENVOLVIMENTO TRADICIONAL</h3>
               <img
                  src="desenvolvimento-tradicional.png" // Substitua pelo caminho da imagem do desenvolvimento tradicional
                  alt="Desenvolvimento Tradicional"
                  style={{ width: "100%" }}
               />
               <ul
                  style={{
                     listStyleType: "none",
                     padding: 0,
                     textAlign: "left",
                  }}
               >
                  <li style={{ color: "red" }}>
                     ❌ Processos lentos e burocráticos
                  </li>
                  <li style={{ color: "red" }}>❌ Falta de flexibilidade</li>
                  <li style={{ color: "red" }}>❌ Alto custo de manutenção</li>
                  <li style={{ color: "red" }}>❌ Dificuldade de integração</li>
                  <li style={{ color: "red" }}>
                     ❌ Baixa adaptabilidade a mudanças
                  </li>
               </ul>
            </div>

            {/* Desenvolvimento Looptis */}
            <div
               style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  width: "30%",
                  textAlign: "center",
               }}
            >
               <h3 style={{ color: "#a80808" }}>DESENVOLVIMENTO LOOPTIS</h3>
               <img
                  src="desenvolvimento-looptis.png" // Substitua pelo caminho da imagem do desenvolvimento Looptis
                  alt="Desenvolvimento Looptis"
                  style={{ width: "100%" }}
               />
               <ul
                  style={{
                     listStyleType: "none",
                     padding: 0,
                     textAlign: "left",
                  }}
               >
                  <li style={{ color: "green" }}>
                     ✅ Processos ágeis e eficientes
                  </li>
                  <li style={{ color: "green" }}>✅ Alta flexibilidade</li>
                  <li style={{ color: "green" }}>
                     ✅ Baixo custo de manutenção
                  </li>
                  <li style={{ color: "green" }}>✅ Fácil integração</li>
                  <li style={{ color: "green" }}>
                     ✅ Alta adaptabilidade a mudanças
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
export default Sobre;
