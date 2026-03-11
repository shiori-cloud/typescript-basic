type Post = {
  id: number;
  title: string;
  body: string;
  published: boolean;
};

type PostDraft = Partial<Post>;

type PostPreview = Pick<Post, 'id' | 'title'>;

type Published = Readonly<Post>;
