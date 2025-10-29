const BOT_TOKEN = '8437056790:AAGYyKLHiyYonJcVdHnhnz5kkZ02RsoarsM';
const CHAT_ID = '-1003071905321';

const sendMessage = async (message: any) => {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const data = {
        chat_id: CHAT_ID,
        text: message,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
    } catch (error) {
    }
}

export default sendMessage