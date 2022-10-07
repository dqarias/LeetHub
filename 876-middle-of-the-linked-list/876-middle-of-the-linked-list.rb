# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def middle_node(head)
    array = []
    current = head
    count = 0
    while current != nil
       count = count + 1
       array.push(current)
       current = current.next 
        
    end
    
    array[count/2]
end