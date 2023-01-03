import { FC, FormEvent, useState } from "react";
import { ITitle } from "./Title.d";
import { Title } from "./Title.styled";

const TitleEdit: FC<ITitle> = ({ textTitle }) => {
  const dateCardSelected = textTitle;
  console.log(dateCardSelected);
  const defaultText = "";
  const [content, setContent] = useState(defaultText);
  const [textColor, setTextColor] = useState(true);

  const handlerOnBlur = (event: FormEvent<HTMLHeadingElement>) => {
    const text = (event.target as HTMLHeadingElement).textContent;
    if (!text) {
      setTextColor(true);
      setContent(defaultText);
      return;
    }
    setContent(text as string);
  };

  const handlerOnFocus = () => {
    if (content === defaultText) {
      setContent("");
    }
  };

  return (
    <Title
      onInput={() => setTextColor(false)}
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      suppressContentEditableWarning={true}
      defalutText={textColor}
      contentEditable
    >
      {content}
    </Title>
  );
};

export default TitleEdit;
