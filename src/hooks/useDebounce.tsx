import { useEffect, useState } from 'react'

type useDebounceProps<T> = {
    value: string,
    effect: () => Promise<T>,
}

const useDebounce = <T,>({value, effect}: useDebounceProps<T>) => {
  const [result, setResult] = useState<T | null>(null)
  useEffect(() => {
    const timer = setTimeout(async () => {
        const result = await effect();
        setResult(result);
    }, 1000)
    return () => {
        clearTimeout(timer);
    }
  }, [value, effect]);
  return {
    result,
  }
}

export default useDebounce