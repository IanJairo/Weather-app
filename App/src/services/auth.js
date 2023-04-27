import AsyncStorage from '@react-native-async-storage/async-storage';


export const isAuthenticated = async () => {
    try {
        const resp = await AsyncStorage.getItem('userDetails');
        console.log('qual usuario: ', resp)
        if (resp === null) return false;

        return true;
    } catch (error) {
        return 'houve um erro: ', error;
    }
}




export const Login = async (email, password) => {
    try {
        const resp = await AsyncStorage.getItem(email);

        if (resp !== null) {
            const conta = JSON.parse(resp);
            if (conta.email === email && conta.password === password) {
                console.log('logado')
                await AsyncStorage.setItem('userDetails', JSON.stringify(conta));

                return true;
            } else {
                return false;
            }
        }
        else {
            return false;
        }
    } catch (error) {
        return 'houve um erro: ', error;
    }

};

export const Logout = async () => {
    try {

        await AsyncStorage.removeItem('userDetails');
        return true;
    } catch (error) {
        return 'houve um erro: ', error;
    }
}

export const Signup = async (obj) => {

    try {
        await AsyncStorage.setItem(obj.email, JSON.stringify(obj));
        return true;
    } catch (error) {
        return 'houve um erro: ', error;
    }
};
