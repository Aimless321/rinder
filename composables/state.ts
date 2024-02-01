import type {Recipe} from "~/types/recipe";

export const useAuthToken = () => useState<string>('auth', () => "");
export const useRecipeFeedBuffer = () => useState<Array<Recipe>>('recipe-buffer', () => []);