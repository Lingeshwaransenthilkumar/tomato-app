import { useState } from 'react';
import "./SuggestRecipe.css";
import {
  Button,
  Input,
  Textarea,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Box,
  Flex,
  Text,
  
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const SuggestRecipe = () => {
  const hotels = ['Hotel Taj', 'Spice Hub', 'Grand Dine','SS Hyderabadi Biriyani'];

  const [recipes, setRecipes] = useState({
    pending: [
      { id: 1, name: 'John Doe', recipeName: 'Pasta Carbonara', description: 'A creamy Italian pasta with eggs and cheese.', hotel: 'Hotel Taj', likes: 2 },
      { id: 2, name: 'Jane Smith', recipeName: 'Vegetable Stir Fry', description: 'A healthy mix of veggies stir-fried with soy sauce.', hotel: 'Spice Hub', likes: 0 },
      { id :3, name :'Lingesh',recipeName:'Fish grill', description:'Smoky, tender, herbed grilled fish.',hotel:'SS Hyderabadi Biriyani',likes:2}
    ],
    approved: [
      { id: 3, name: 'Alice Cooper', recipeName: 'Grilled Salmon', description: 'Salmon fillet grilled to perfection with herbs.', hotel: 'Grand Dine', likes: 5, approved: true }
    ]
  });
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [filterApproved, setFilterApproved] = useState(false);
  const [open, setOpen] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data) => {
    const newRecipe = { ...data, id: Date.now(), likes: 0 };
    setRecipes(prev => ({ pending: [...prev.pending, newRecipe], approved: prev.approved }));
    reset();
    setOpen(false);
    toast({ title: 'Recipe submitted.', status: 'success', duration: 3000, isClosable: true, position: 'bottom' });
  };

  const toggleApproval = (id) => {
    const recipe = recipes.pending.find(r => r.id === id);
    if (recipe) {
      setRecipes(prev => ({ pending: prev.pending.filter(r => r.id !== id), approved: [...prev.approved, { ...recipe, approved: true }] }));
      toast({ title: 'Recipe approved.', status: 'info', duration: 2000, isClosable: true, position: 'top' });
    }
  };

  const handleLike = (id) => {
    if (likedRecipes.includes(id)) {
      toast({ title: "You've already liked this recipe!", status: 'warning', duration: 2000, isClosable: true, position: 'top' });
      return;
    }
    setRecipes(prev => ({
      pending: prev.pending.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r),
      approved: prev.approved.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r)
    }));
    setLikedRecipes(prev => [...prev, id]);
  };

  const filteredRecipes = filterApproved ? recipes.approved : [...recipes.pending, ...recipes.approved];

  return (
    <Box p={4} maxW="3xl" mx="auto">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold" className='title'>Recipes</Text>
        <Button onClick={() => setOpen(true)}>Add Recipe</Button>
      </Flex>
    <div className='modal-box'>
    <Modal className='modal' isOpen={open} onClose={() => setOpen(false)} isCentered>
        <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
        <ModalContent bg="white" borderRadius="2xl" p={6}>
          <ModalHeader className='title' fontWeight="bold" mb={2}>Submit Your Recipe</ModalHeader>
          <ModalCloseButton
         position="absolute"
        top={3}
  right={50}
  borderRadius="full"
  size="sm"
  bg="red.500"
  color="white"
  _hover={{ bg: 'red.600' }}
/>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormControl isInvalid={errors.name} mb={4}>
                <FormLabel>Your Name</FormLabel>
                <Input
                  placeholder="Your Name"
                  width="98%"
                  size="lg"
                  {...register('name', { required: 'Name is required' })}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.recipeName} mb={4}>
                <FormLabel>Recipe Name</FormLabel>
                <Input
                  placeholder="Recipe Name"
                  width="98%"
                  size="lg"
                  {...register('recipeName', { required: 'Recipe name is required' })}
                />
                <FormErrorMessage>{errors.recipeName?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.description} mb={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  width="98%"
                  size="lg"
                  {...register('description', { required: 'Description is required' })}
                />
                <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.hotel} mb={6}>
                <FormLabel>Hotel</FormLabel>
                <Select
                  placeholder="Select hotel"
                  width="98%"
                  size="lg"
                  {...register('hotel', { required: 'Please select a hotel' })}
                >
                  {hotels.map(hotel => (
                    <option key={hotel} value={hotel}>{hotel}</option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.hotel?.message}</FormErrorMessage>
              </FormControl>

              <Button type="submit" width="98%" className='submit-btn'>Submit</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
      
      <Flex justify="space-between" align="center" mb={4}>
        <Button onClick={() => setFilterApproved(!filterApproved)}>
          {filterApproved ? 'Show All' : 'Show Approved Only'}
        </Button>
      </Flex>

      {filteredRecipes.length === 0 ? (
        <Text textAlign="center" color="gray.500">No recipes available</Text>
      ) : (
        filteredRecipes.map(recipe => (
          <Box className='record-list' key={recipe.id} p={4} borderWidth="1px" borderRadius="2xl" shadow="sm" mb={4}>
            <Text fontSize="lg" fontWeight="bold" mb={1}>{recipe.recipeName} by {recipe.name}</Text>
            <Text mb={1}>{recipe.description}</Text>
            <Text fontSize="sm" color="gray.600" mb={2}>Hotel: {recipe.hotel}</Text>
            <Flex justifyContent="flex-end" alignItems="center">
    <Flex gap={2}>
      <Button onClick={() => handleLike(recipe.id)} size="sm">
        👍 {recipe.likes}
      </Button>
      {recipe.approved ? (
        <Button
          onClick={() => toggleApproval(recipe.id)}
          size="sm"
          colorScheme="green"
        >
          ✅ Approved
        </Button>
      ) : (
        <Button
          onClick={() => toggleApproval(recipe.id)}
          size="sm"
          colorScheme="gray"
        >
          ⏳ Pending
        </Button>
      )}
    </Flex>
  </Flex>
          </Box>
        ))
      )}
    </Box>
  );
};

export default SuggestRecipe;
