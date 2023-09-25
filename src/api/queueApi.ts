import { Feedback } from "@/api/feedbackApi";
import api from "./api";

export type QueueInfoResponse = {
  allMessagesAttributes: MessageInfoResponse[];
}

export type MessageInfoResponse = {
  messageId: string;
  receiptHandle: string;
  body: any;
  md50OfBody: string;
  attributes: any;
  md5OfMessageAttributes: any;
}

const queueApi = {
  getApproxQueueSize: (type: Omit<Feedback, 'message'>) =>
    api.get('v1/queue-size', { params: type }),
  getQueueInfo: (type: Omit<Feedback, 'message'>) =>
    api.get<QueueInfoResponse>('v1/queue-info/by', { params: { type: type.feedbackType } })
      .then(response => response.data),
}

export default queueApi;