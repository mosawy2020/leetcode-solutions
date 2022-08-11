class Solution {

    /**
     * @param Integer[][] $matrix
     * @param Integer $target
     * @return Boolean
     */
 public   $freq = [] ; public $stored  = false ; 
    function searchMatrix($matrix, $target) {
        if (!$stored) {$this->store($matrix) ; $stored = true ; }
return $this->$freq[$target]==1? true :false ; 
    }
    
  public   function store ($m) {
        foreach ($m as $e) {
            foreach ($e as $l) {
               $this-> $freq[$l] = 1 ; 
            }
        }
    }
    
}