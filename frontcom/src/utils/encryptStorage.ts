import EncryptedStorage from 'react-native-encrypted-storage';

// EncryptedStorage에 데이터를 저장하는 함수
const setEncryptStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

// EncryptedStorage에서 데이터를 가져오는 함수
const getEncryptStorage = async (key: string) => {
  const storedData = await EncryptedStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
};

// EncryptedStorage를 지우는 함수
const removeEncryptStorage = async (key: string) => {
  const data = await getEncryptStorage(key);
  if (data) {
    await EncryptedStorage.removeItem(key);
  }
};

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
