//https://developer.spotify.com/documentation/web-playback-sdk/quick-start///#endregion

export const authEndpoint =
"https://accounts.spotify.com/authorize";

const redirectUri = "http://avigyanpato.github.io/Spotify_Clone/";

const clientId="8127e8e5096e4ca7aad1e876c6ef3d49";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});

};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&Scopes=${scopes.join("%20"
)}&response_type=token&show_dialog=true`; 

