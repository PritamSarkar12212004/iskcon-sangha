import keychainConst from '../../constants/keychain/keychainConst';
import { getKeyChain } from '../../services/keychain/keychain';

const SplashAuthCheker = async () => {
  try {
    let auth = await getKeyChain(keychainConst.AUTH_KEY);
    return auth;
  } catch (error) {
    console.log('Error in SplashAuthCheker', error);
    return false;
  }
};
export default SplashAuthCheker;
