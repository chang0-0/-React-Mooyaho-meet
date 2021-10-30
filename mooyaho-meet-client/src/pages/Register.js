import AuthForm from '../components/AuthForm'
import AuthTemplate from '../components/AuthTemplate'

function Register() {
  const onSubmit = (form) => {
    console.log(form)
    console.log('폼')
  }

  return (
    <AuthTemplate title="Register">
      <AuthForm isRegister onSubmit={onSubmit} />
    </AuthTemplate>
  )
}

export default Register
