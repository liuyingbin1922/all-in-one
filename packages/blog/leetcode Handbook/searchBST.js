/**
 * @description 二叉搜索树相关概念
 */



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @description leetcode 701
 * @description 二叉搜索树的插入操作
 */

var insertIntoBST = function(root, val) {
    const insert = (root , val) => {
        if(root === null) {
            const node = new TreeNode(val)
            return node
        }
        if(root.val > val) {
            root.left = insert(root.left , val)
        } else if(root.val < val) {
            root.right = insert(root.right , val)
        }
        return root
    }
    return insert(root , val)
};


