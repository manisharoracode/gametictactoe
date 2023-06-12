import { useState } from 'react';

const emojiList = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '👿', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾',
];

export default function HomeEmoji() {
  const [selectedEmoji, setSelectedEmoji] = useState('');

  function handleEmojiClick(emoji) {
    setSelectedEmoji(emoji);
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(selectedEmoji);
  }

  return (
    <div>
      <div>
        {emojiList.map((emoji) => (
          <span key={emoji} className='emoji-size' onClick={() => handleEmojiClick(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
      {selectedEmoji && (
        <div>
          <span>{selectedEmoji}</span>
          <button onClick={handleCopyClick}>Copy</button>
        </div>
      )}
    </div>
  );
}