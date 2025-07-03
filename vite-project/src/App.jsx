import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Card
      image="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/477212107_1399516171036412_4316852747341725036_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtCMcfxqCW4xzpFpp8A3VYhcupsiavGCiFy6myJq8YKLbYwofUno0sBtn9opZsw75vYJQf4irJDm8fr3mlWgbr&_nc_ohc=03Lph3r8x_YQ7kNvwHX38Vr&_nc_oc=AdnIbIl4Tv4z6hjuksiGBIuI-aV_wJjqGv1aFZVMDapJwH16T6YxL2_gaVxmd2UL48g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=aFdNaVruuy9RfBI28va2sg&oh=00_AfMpHgc33ocnjRqVV2LmmDwm-jSUEHuN660vTij3GTfmmQ&oe=686C2BEA"
      title="Bảo Nguyên"
      content="Chạy thử"
    />
  );
}

export default App;
