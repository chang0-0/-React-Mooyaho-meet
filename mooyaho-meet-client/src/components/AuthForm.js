import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AuthTemplate from './AuthTemplate'
import Button from './Button'
import LabelInput from './LabelInput'

function AuthForm({ isRegister }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <form>
      <LabelInput label="Username" name="username" onChange={onChange} />
      <LabelInput label="Password" name="password" onChange={onChange} />
      {isRegister && (
        <LabelInput
          label="Confirm password"
          name="passwordConfirm"
          onChange={onChange}
        />
      )}

      <StyleButton fullWidth>{isRegister ? 'Register' : 'Login'}</StyleButton>
      <Or>
        <Link to={isRegister ? '/login' : '/register'}>
          {isRegister ? 'Login' : 'Register'}
        </Link>
      </Or>
    </form>
  )
}

const StyledForm = styled.form``
const StyleButton = styled(Button)`
  margin-top: 32px;
`

const Or = styled.div`
  color: #333333;
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  a {
    color: inherit;
    &:hover {
      color: #555555;
    }
  }
`

export default AuthForm
