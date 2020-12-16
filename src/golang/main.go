package main

import (
	"fmt"
)

type Node struct {
	value       rune
	isEndOfWord bool
	children    map[rune]*Node
}

func (n *Node) containsKey(ch rune) bool {
	_, ok := n.children[ch]
	return ok
}
func (n *Node) getNode(ch rune) *Node {
	node := n.children[ch]
	return node
}
func (n *Node) add(ch rune) {
	n.children[ch] = &Node{value: ch, children: make(map[rune]*Node)}
}

type Tries struct {
	root Node
}

func NewTie() Tries {
	return Tries{root: Node{value: 0, children: make(map[rune]*Node)}}
}
func (t *Tries) add(str string) {

	current := &t.root
	for _, ch := range str {
		if !current.containsKey(ch) {
			current.add(ch)
		}
		current = current.getNode(ch)
	}
	current.isEndOfWord = true
}

func (t *Tries) search(str string) []string {
	res := make([]string, 0)
	var searchHelper func(Node, string)
	searchHelper = func(node Node, word string) {

		if node.value == 0 {
			return
		}
		if node.isEndOfWord {
			res = append(res, word)
		}
		for _, n := range node.children {
			searchHelper(*n, word+string(n.value))
		}
	}
	current := t.root
	for _, ch := range []rune(str) {
		if current.containsKey(ch) {
			current = *current.getNode(ch)
		} else {
			return res
		}

	}

	searchHelper(current, str)

	return res
}
func main() {
	t := NewTie()
	t.add("cat")
	t.add("card")
	t.add("caution")

	fmt.Println(t.search("ca"))

}
