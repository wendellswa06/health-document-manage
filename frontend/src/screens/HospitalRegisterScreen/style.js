import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`

export const AuthCard = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #fff;
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100vh;
  }
`

export const AuthCardImage = styled.img`
  width: 50%;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const AuthCardInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 30px;

  @media (max-width: 1000px) {
    align-items: center;
    padding-left: 0;
  }
`

export const AuthCardHeading = styled.h1`
  font-family: 'Montserrat';
  font-weight: 700;
  color: #496bf2;
  margin-bottom: 15px;
`

export const AuthCardSubHeading = styled.h2`
  font-family: 'Poppins';
  font-weight: 500;
`

export const AuthCardSubHeadingInfo = styled.p`
  font-family: 'Montserrat';
  font-size: 12px;
  color: #737688;
  width: 85%;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 11px;
  }
`

export const AuthForm = styled.form`
  width: 85%;
  margin-bottom: 10px;
`

export const AuthFormLabel = styled.h6`
  font-family: 'Poppins';
  font-weight: 600;
  color: #2dd6c1;
`

export const AuthFormInputContainer = styled.div`
  display: flex;
  border-bottom: 3px solid #496bf2;
  width: 100%;
  justify-content: start;
  align-items: center;
  margin-bottom: ${({ errorMessage }) => (errorMessage ? '5px' : '20px')};
`

export const AuthFormInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 30px;
  padding: 2px;
  font-family: 'Quicksand';
  font-size: 12px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

   {
    -moz-appearance: textfield;
  }
`

export const AuthFormSubmitButton = styled.button`
  background-color: #2dd6c1;
  color: #fff;
  font-family: 'Quicksand';
  font-weight: 500;
  width: 100%;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
`

export const AuthCardCopyright = styled.div`
  color: #54586a;
  font-family: 'Quicksand';
  font-size: 10px;
  width: 85%;
  text-align: center;
`

export const BackButton = styled(Link)`
  text-decoration: none;
  color: #496bf2;
  font-family: 'Poppins';
  margin-top: 15px;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    color: #2dd6c1;
  }
`

export const ErrorMessage = styled.h6`
  color: red;
  font-style: italic;
  margin-bottom: 5px;
`

export const AuthCardRedirect = styled.p`
  font-family: 'Montserrat';
  font-size: 10px;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
`

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #2dd6c1;
  font-family: 'Poppins';
  font-size: 10px;
  font-weight: 700;

  &:hover {
    color: #496bf2;
  }
`

export const UtilityContainer = styled.div`
  display: flex;
`

export const FormInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 10px;

  &.rightMargin {
    margin-right: 10px;
  }
`
