export class Task {
  constructor(initData?: { [P in keyof Task]?: Task[P] | null }) {
    Object.assign(this, initData);
  }

  id!: number;

  content!: string;

  type!: 'Home' | 'Work' | 'Other';

  state!: 'None' | 'Doing' | 'Finish';
}
