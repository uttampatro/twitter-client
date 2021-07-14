import axios from './axios';
import * as config from './../config/api';
import { ITweetReply } from '../pages/twitter/components/tweetFeed/TweetFeed';

export interface ITweetService {
    getTweetList(): Promise<any[]>;
    // getReplyTweet(parentTweetId: number): Promise<ITweetReply[]>;
    addTweet(text: string, imageURL: string, userId: number): Promise<any[]>;
    addTweetReply(
        userId: number,
        parentTweetId: number,
        text: string,
        imageURL: string
    ): Promise<any[]>;
}

export class TweetService implements ITweetService {
    async getTweetList(): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/tweetList`
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getReplyTweet(parentTweetId: number): Promise<ITweetReply[]> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/replyTweetList/${parentTweetId}`
            );
            // debugger;
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async addTweet(
        text: string,
        imageURL: string,
        userId: number
    ): Promise<any[]> {
        try {
            const response = await axios.post(
                `${config.apiConfig.baseUrl}/v1/tweet`,
                {
                    text,
                    imageURL,
                    userId,
                }
            );
            if (response.data) {
                localStorage.setItem('tweet', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    async addTweetReply(
        userId: number,
        parentTweetId: number,
        text: string,
        imageURL: string
    ): Promise<any[]> {
        try {
            const response = await axios.post(
                `${config.apiConfig.baseUrl}/v1/replyTweet`,
                {
                    text,
                    imageURL,
                    parentTweetId,
                    userId,
                }
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default new TweetService();
