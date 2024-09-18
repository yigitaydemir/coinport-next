import { useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from '../context/UserContext'

const ComponentA = () => {
  const context = useContext(UserContext)
  const { user, setUser } = context

  return (
    <View>
      <Text>ComponentA</Text>
      <Text>{user}</Text>
    </View>
  )
}

export default ComponentA