import { useLikes } from '../context/LikesContext';
import { Button } from './ui/Button';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      variant="primary"
      aria-label={`Like (${likes} likes)`}
      onClick={addLike}
    >
      {likes === 0 ? '🤍 Like' : `❤️ Liked (${likes})`}
    </Button>
  );
}

export default LikeButton;