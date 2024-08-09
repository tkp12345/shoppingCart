import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const NavLayout = () => {
  const navigate = useNavigate();

  return (
    <NavContents className="header-layout">
      <div className="logo-container">
        <div className="logo">BUCKET</div>
        <div className="back-button" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft size={24} />
        </div>
      </div>
    </NavContents>
  );
};
const NavContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.text};

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    display: block;
  }

  .back-button {
    display: none;
    cursor: pointer;
  }

  /* 1023px 이상 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: #fff;
    color: #000; /* 글자 색도 변경 */

    .logo {
      display: none; /* 로고 숨기기 */
    }

    .back-button {
      display: block; /* 뒤로 가기 버튼 보이기 */
    }

    img {
      height: 24px;
      width: 24px;
    }
  }

  /* 1024px 이상에서는 배경색 검은색 */
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: #000;
    color: #fff;

    .logo {
      display: block; /* 로고 보이기 */
    }
  }
`;
