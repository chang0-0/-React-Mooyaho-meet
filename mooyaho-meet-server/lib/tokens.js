const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET
exports.generateToken = async function generateToken(data, options = {}) {
  return new Promise((resolve, reject) => {
    //jwt.sign()
    // sign함수 첫 번째 인자에는 payload가 들어가고 두 번째 인자에는
    // 비 밀키값이 들어갑니다. 출력결과는 .으로 이루어진 문자열이 출력됨
    //
    jwt.sign(data, JWT_SECRET, options, (err, token) => {
      if (err) {
        reject(err)
        return
      }
      resolve(token)
    })
  })
}

exports.verifyToken = async function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err)
        return
      }
      resolve(decoded)
    })
  })
}
