import { FormEvent, useState } from "react";
import { Wrapper } from "./Paragraph.styled";

const Paragraph = () => {
  const texto = "escriba su nota aqui..."
  const [defaultText, setDefaultText] = useState(texto);
  const [colorText, setColorText] = useState(true);

  const handlerOnBlur = (event: FormEvent<HTMLParagraphElement>) => {
    const html = (event.target as HTMLParagraphElement).innerHTML;
    const contenido = (event.target as HTMLParagraphElement).textContent;

    if (!html || contenido === "") {
      setColorText(true);
      setDefaultText(texto);
      return;
    }
    setDefaultText(html as string);
  };

  const handlerOnFocus = () => {
    if (defaultText === texto) {
      setDefaultText("");
    }
  };

  return (
    <Wrapper
      defaulTextColor={colorText}
      onInput={() => setColorText(false)}
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      dangerouslySetInnerHTML={{__html : defaultText}}
      suppressContentEditableWarning={true}
      contentEditable
    >
    </Wrapper>
  );
};

export default Paragraph;
