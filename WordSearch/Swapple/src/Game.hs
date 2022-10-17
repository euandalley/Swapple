module Game (
  increaseAscii, increaseLetter,
  decreaseAscii, decreaseLetter,
  shiftLeft, shiftRight,
  duplicateLastLetter, deleteFirstLetter
)
where

import Data.Char (ord, chr)


increaseAscii :: Char -> Char  -- Helper func for increaseLetter
increaseAscii c = case ascii of
  90 -> chr 65
  _  -> chr $ 1 + ascii
  where ascii = ord c


decreaseAscii :: Char -> Char   -- Helper func for decreaseLetter
decreaseAscii c = case ascii of
  65 -> chr 90
  _  -> chr $ ascii - 1
  where ascii = ord c

-- Increase letter in nth index
increaseLetter :: String -> Int -> String  
increaseLetter s x = a ++ c
  where
    a = take x s
    b = drop (x+1) s
    c = increaseAscii (s !! x) : b

decreaseLetter :: String -> Int -> String
decreaseLetter s x = a ++ c
  where
    a = take x s
    b = drop (x+1) s
    c = decreaseAscii (s !! x) : b


shiftLeft :: String -> String
shiftLeft s = drop 1 s ++ take 1 s

shiftRight :: String -> String
shiftRight s = drop x s ++ take x s
  where x = length s - 1


duplicateLastLetter :: String -> String
duplicateLastLetter s = s ++ drop x s
  where x = length s - 1

deleteFirstLetter :: String -> String
deleteFirstLetter = drop 1


-- Composite Functions

generateLetterChanges :: String -> [String]
generateLetterChanges [] = []
generateLetterChanges (x:xs) = [increaseLetter x, decreaseLetter x] : generateLetterChanges xs