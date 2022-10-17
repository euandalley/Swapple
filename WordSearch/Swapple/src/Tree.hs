module Tree
    () where

import Game ()


-- Tree is of the type Left Child, Right Sibling
data Tree a
    = Empty
    | Node a (Tree a) (Tree a)
    deriving (Eq, Show, Ord)


createTree :: String -> Tree String
createTree s = Node s Empty Empty

