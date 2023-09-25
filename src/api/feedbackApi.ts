import api from "./api";

export type Feedback = {
  message: string;
  feedbackType: 'ELOGIO' | 'SUGESTAO' | 'CRITICA';
}

const feedbackApi = {
  postFeedback: (feedback: Feedback) => api.post('/v1/feedback', feedback)
}

export default feedbackApi;