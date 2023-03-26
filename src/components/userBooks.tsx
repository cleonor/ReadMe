import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Container, Wrapper } from "./userBooks.styles";

interface IInfoDialog {}

interface IUserBooks {
  title: string;
  numberOfPages: number;
}

export const UserBooks = (props: IInfoDialog) => {
  const [userBooks, setUserBooks] = useState<IUserBooks[]>();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    axios.get<IUserBooks[]>("http://localhost:3001/myBooks").then((res) => {
      setUserBooks(res.data);
    });
  };

  return (
    <>
      {userBooks?.map((book) => (
        <Container>
          <Wrapper>
            <div>{book.title}</div>
          </Wrapper>
        </Container>
      ))}
    </>
  );
};
