int = 600851475143
factor = 2

while factor <= Math.sqrt(int)
	if (int % factor == 0)
		int = int / factor
	else
		factor = factor + 1
	end
end

puts int
