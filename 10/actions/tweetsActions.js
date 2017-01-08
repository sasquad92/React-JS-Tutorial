import axios from "axios"

export function fetchTweets() {
    return function(dispach) {
        axios.get("http://rest.learncode.academy/api/test123/tweets")
        .then((response) => {
            dispach({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispach({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function addTweet(id, text) {
    return {
        type: "ADD_TWEET",
        payload: {
            id,
            text,
        },
    }
}

export function updateTweet(id, text) {
    return {
        type: "UPDATE_TWEET",
        payload: {
            id,
            text,
        },
    }
}

export function deleteTweet(id) {
    return {
        type: "DELETE_TWEET",
        payload: id,
    }
}