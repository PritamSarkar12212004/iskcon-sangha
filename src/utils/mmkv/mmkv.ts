import { createMMKV } from 'react-native-mmkv'
export const storage = createMMKV({
    id: 'iskcon-sangha-storage',
    encryptionKey: 'iskcon-sangha-encryption-key',
})
