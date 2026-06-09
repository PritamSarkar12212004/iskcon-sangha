import * as Keychain from 'react-native-keychain';

type KeychainParams = {
  data: string;
  stateName: string;
};

export const setKeyChain = async ({
  data,
  stateName,
}: KeychainParams): Promise<boolean> => {
  try {
    await Keychain.setGenericPassword(stateName, data, {
      service: stateName,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
    });

    return true;
  } catch (error) {
    console.error(`[Keychain] Failed to save ${stateName}:`, error);
    return false;
  }
};

export const getKeyChain = async (
  stateName: string,
): Promise<string | null> => {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: stateName,
    });

    return credentials?.password ?? null;
  } catch (error) {
    console.error(`[Keychain] Failed to get ${stateName}:`, error);
    return null;
  }
};

export const removeKeyChain = async (stateName: string): Promise<boolean> => {
  try {
    await Keychain.resetGenericPassword({
      service: stateName,
    });

    return true;
  } catch (error) {
    console.error(`[Keychain] Failed to remove ${stateName}:`, error);
    return false;
  }
};
