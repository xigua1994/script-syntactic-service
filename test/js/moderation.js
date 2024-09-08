const generateMessage = (name) =>
  `Hello, ${name}! Welcome to the future of JavaScript.`

async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch user data:', error)
  }
}

const usersMap = new Map()

for (const [key, value] of usersMap) {
  console.log(`Key: ${key}, Value: ${value}`)
}

function updateUserInfo({ userId, name, email, age = 25 }) {
  console.log(`Updating user ${userId}: ${name}, ${email}, ${age}`)
}

const userName = 'test'
let userAge = 30

updateUserInfo({ userId: 1, name: userName, email: 'test@example.com' })

;(async () => {
  const userData = await fetchUserData(1)
  if (userData) {
    usersMap.set(userData.userId, `${userData.name} - ${userData.email}`)
  }
})()

Promise.all([fetchUserData(1), fetchUserData(2)])
  .then(([userData1, userData2]) => {
    console.log('User 1 Data:', userData1)
    console.log('User 2 Data:', userData2)
  })
  .catch((error) => {
    console.error('Error fetching users data:', error)
  })

console.log(generateMessage('test'))
