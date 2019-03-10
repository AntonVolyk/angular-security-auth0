import { Session } from './session';
import { User } from '../src/app/model/user';

export class SessionStore {
    private sessions: {[key: string]: Session} = {};

    createSession(sessionId: string, user: User) {
        this.sessions[sessionId] = new Session(sessionId, user);
    }

    findUserBySessionId(sessionId: string): User | undefined {
        const session = this.sessions[sessionId];
        return this.isSessionValid(sessionId) ? session.user : undefined;
    }

    isSessionValid(sessionId: string): boolean {
        const session = this.sessions[sessionId];
        return session && session.isValid();
    }

    destroySession(sessionId: string) {
        console.log(this.sessions[sessionId]);
        delete this.sessions[sessionId];
        console.log('after delete: ' + this.sessions);
    }

}

export const sessionStore = new SessionStore();
